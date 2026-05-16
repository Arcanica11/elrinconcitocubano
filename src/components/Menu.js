import { getTranslation } from '../app/i18n';

// Use a plain <img> tag to guarantee the browser resolves
// the path correctly regardless of locale routing or client/server context.
// Next.js serves /public files at the root — these paths are absolute.

const Menu = async ({ locale }) => {
  const { t } = await getTranslation(locale, 'common');
  const menuData = t('menu', { returnObjects: true });

  if (!menuData || !menuData.categories) return null;

  // Simple image wrapper — plain <img>, always absolute from domain root
  const Img = ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: '8px' }}
    />
  );

  const ImgBox = ({ src, alt, ratio = '56.25%' }) => (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingBottom: ratio,
      overflow: 'hidden',
      borderRadius: '12px',
      border: '1px solid rgba(87,83,78,0.5)',
      backgroundColor: '#1c1917',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
    }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Img src={src} alt={alt} />
      </div>
    </div>
  );

  return (
    <section className="bg-stone-900 py-16 text-white font-sans relative overflow-hidden" id="menu">
      {/* Decorative fire-like background glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-600 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 mb-20 uppercase tracking-widest drop-shadow-lg">
          {menuData.title}
        </h2>

        {/* ─── 1. CUBAN PIZZA ─── */}
        <div className="mb-24">
          <div className="flex justify-center mb-12">
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase text-center border-b-4 border-red-600 pb-2 inline-block drop-shadow-lg">
              {menuData.categories.cubanPizza}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-stone-800/30 p-8 rounded-2xl border border-stone-700/50">
              <h4 className="text-3xl font-bold text-red-500 mb-6 uppercase text-center tracking-wide">{menuData.cubanPizza.classics}</h4>
              <ul className="space-y-3 mb-10">
                {menuData.cubanPizza.classicsItems.map((item, i) => (
                  <li key={i} className="flex justify-between text-lg font-bold border-b border-stone-800 pb-1">
                    <span className="uppercase text-stone-200">{item.name}</span>
                    <span className="text-yellow-400">${item.price}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-3xl font-bold text-red-500 mb-6 uppercase text-center tracking-wide">{menuData.cubanPizza.vegetables}</h4>
              <ul className="space-y-3 mb-10">
                {menuData.cubanPizza.vegetablesItems.map((item, i) => (
                  <li key={i} className="flex justify-between text-lg font-bold border-b border-stone-800 pb-1">
                    <span className="uppercase text-stone-200">{item.name}</span>
                    <span className="text-yellow-400">${item.price}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-3xl font-bold text-red-500 mb-6 uppercase text-center tracking-wide">{menuData.cubanPizza.extras}</h4>
              <ul className="space-y-3">
                {menuData.cubanPizza.extrasItems.map((item, i) => (
                  <li key={i} className="flex justify-between text-lg font-bold border-b border-stone-800 pb-1">
                    <span className="uppercase text-stone-200">{item.name}</span>
                    <span className="text-yellow-400">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-stone-800/30 p-8 rounded-2xl border border-stone-700/50 flex-grow">
                <h4 className="text-3xl font-bold text-red-500 mb-6 uppercase text-center tracking-wide">{menuData.cubanPizza.specials}</h4>
                <ul className="space-y-3 mb-8">
                  {menuData.cubanPizza.specialsItems.map((item, i) => (
                    <li key={i} className="flex justify-between text-lg font-bold border-b border-stone-800 pb-1">
                      <span className="uppercase text-stone-200">{item.name}</span>
                      <span className="text-yellow-400">${item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-red-900/80 to-stone-900 p-6 rounded-xl border-l-4 border-red-500 shadow-2xl mt-8 transform transition hover:-translate-y-1">
                  <h4 className="text-2xl font-black text-white uppercase flex justify-between items-center mb-2">
                    <span>{menuData.cubanPizza.elRinconcitoPizza.name}</span>
                    <span className="text-yellow-400 bg-black/40 px-3 py-1 rounded-lg">${menuData.cubanPizza.elRinconcitoPizza.price}</span>
                  </h4>
                  <p className="text-stone-300 font-medium text-sm uppercase">{menuData.cubanPizza.elRinconcitoPizza.desc}</p>
                </div>
              </div>
              <ImgBox src="/pizza-rinconcito.png" alt="Pizza El Rinconcito" />
            </div>
          </div>
        </div>

        {/* ─── 2. MAIN DISHES ─── */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-black text-red-600 mb-10 uppercase text-center md:text-left border-b-4 border-yellow-500 pb-2 inline-block drop-shadow-md">
            {menuData.categories.mainDishes}
          </h3>
          <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <ImgBox src="/plato-principales-rinconcito.png" alt="Platos Principales El Rinconcito" />
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-6">
                {menuData.mainDishesList.items.map((item, i) => (
                  <li key={i} className="flex flex-col border-b border-stone-800 pb-3">
                    <div className="flex justify-between text-xl font-bold items-center gap-4">
                      <span className="uppercase text-stone-100">{item.name}</span>
                      <span className="text-yellow-400 whitespace-nowrap bg-stone-800/80 px-2 py-1 rounded-md">${item.price}</span>
                    </div>
                    {item.desc && <span className="text-stone-400 text-sm font-medium mt-2">{item.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ─── 3. FULL MEALS ─── */}
        <div className="mb-24">
          <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-16 uppercase text-center drop-shadow-lg">
            {menuData.categories.fullMeals}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div className="bg-stone-800/30 p-8 rounded-2xl border border-stone-700/50">
                <h4 className="text-4xl font-black text-red-600 mb-8 uppercase flex items-center gap-4">
                  {menuData.fullMeals.appetizers}
                  <span className="text-yellow-400 text-2xl bg-stone-900/80 px-3 py-1 rounded-md border border-stone-700">$10</span>
                </h4>
                <ul className="space-y-4">
                  {menuData.fullMeals.appetizersItems.map((item, i) => (
                    <li key={i} className="text-xl font-bold uppercase text-stone-200 border-b border-stone-700/50 pb-2">{item.name}</li>
                  ))}
                </ul>
              </div>
              <ImgBox src="/aperitivos-rinconcito.png" alt="Aperitivos El Rinconcito" />
            </div>

            <div className="bg-stone-800/30 p-8 rounded-2xl border border-stone-700/50">
              <div className="mb-10">
                <div className="flex flex-col mb-8">
                  <h4 className="text-4xl font-black text-red-600 uppercase mb-2 flex items-center gap-4">
                    {menuData.fullMeals.fullMeal}
                    <span className="text-yellow-400 text-2xl bg-stone-900/80 px-3 py-1 rounded-md border border-stone-700">$20</span>
                  </h4>
                  <h5 className="text-2xl font-bold text-red-500 uppercase tracking-widest">{menuData.fullMeals.mainDishesDesc}</h5>
                </div>
                <ul className="space-y-3">
                  {menuData.fullMeals.fullMealItems.map((item, i) => (
                    <li key={i} className="text-lg font-bold uppercase text-stone-200 flex items-center before:content-['•'] before:text-red-500 before:mr-3">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-10 bg-red-900/20 p-6 rounded-xl border border-red-900/50">
                <h4 className="text-3xl font-black text-red-500 uppercase flex justify-between items-center">
                  <span>{menuData.fullMeals.lambStew.name}</span>
                  <span className="text-yellow-400 bg-stone-900/80 px-4 py-2 rounded-lg border border-stone-700 shadow-md">${menuData.fullMeals.lambStew.price}</span>
                </h4>
              </div>
              <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-6 rounded-xl border-t-4 border-yellow-500 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-yellow-500/10 text-9xl">★</div>
                <h4 className="text-xl font-black text-white uppercase mb-4 relative z-10 drop-shadow-md">{menuData.fullMeals.servedWith.title}</h4>
                <ul className="space-y-2 relative z-10">
                  {menuData.fullMeals.servedWith.items.map((item, i) => (
                    <li key={i} className="text-yellow-400 font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. DESSERTS & DRINKS ─── */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase border-b-4 border-red-600 inline-block pb-2">
                {menuData.categories.dessertsDrinks}
              </h3>
              <div className="mb-10">
                <h4 className="text-3xl font-bold text-red-500 mb-4 uppercase drop-shadow-md">{menuData.desserts.title}</h4>
                <ul className="space-y-4">
                  {menuData.desserts.items.map((item, i) => (
                    <li key={i} className="flex justify-between text-xl font-bold items-center">
                      <span className="uppercase text-stone-100">{item.name}</span>
                      <span className="text-yellow-400 bg-stone-800/80 px-3 py-1 rounded-md">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-10">
                <h4 className="text-3xl font-bold text-red-500 mb-4 uppercase flex items-center gap-4 drop-shadow-md">
                  {menuData.smoothies.title}
                  <span className="text-yellow-400 text-2xl bg-stone-800/80 px-3 py-1 rounded-md">$6</span>
                </h4>
                <ul className="space-y-2">
                  {menuData.smoothies.items.map((item, i) => (
                    <li key={i} className="text-xl font-bold uppercase text-stone-200">{item.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-red-500 mb-4 uppercase drop-shadow-md">{menuData.drinksSodas.title}</h4>
                <ul className="space-y-4">
                  {menuData.drinksSodas.items.map((item, i) => (
                    <li key={i} className="flex flex-col border-b border-stone-800 pb-2">
                      <div className="flex justify-between text-lg font-bold items-center">
                        <span className="uppercase text-stone-100">{item.name}</span>
                        <span className="text-yellow-400">${item.price}</span>
                      </div>
                      {item.desc && <span className="text-stone-400 text-sm font-normal mt-1">{item.desc}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6 mt-4 md:mt-16">
              <ImgBox src="/postre-rinconcito.png" alt="Postres El Rinconcito" />
              <ImgBox src="/bebidas-rinconcito.png" alt="Bebidas El Rinconcito" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
