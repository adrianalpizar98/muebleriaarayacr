let currentLang = 'es';

const translations = {
  es: {
    // Navegación
    nav_inicio: "Inicio",
    nav_proyectos: "Proyectos",
    nav_historia: "Historia y Taller",
    nav_cotizador: "Cotizador",

    // Hero
    hero_badge: "Ebanistería fina y tecnología CNC",
    hero_title: "Calidad que se ve, elegancia que se siente",
    hero_desc: "Transformamos sus espacios con mobiliario modular a la medida, sobres de cuarzo y acabados de alta durabilidad en Costa Rica.",
    hero_btn_quote: "Calcular Presupuesto",
    hero_btn_gallery: "Ver Trabajos",

    // Video
    video_title: "Precisión en Cada Detalle",
    video_desc: "Mobiliario fabricado con estrictos estándares de calidad y ajuste exacto para su hogar.",

    // Pilares
    feat_1_title: "Co-creación a la Medida",
    feat_1_desc: "Diseñamos en conjunto cada área de su hogar para asegurar máxima funcionalidad y armonía con sus electrodomésticos empotrados.",
    feat_2_title: "Sobres de Cuarzo y Granito",
    feat_2_desc: "Materiales resistentes a altas exigencias con acabados pulidos y ajustes precisos de fregaderos y plantillas.",
    feat_3_title: "Instalación y Ajuste Directo",
    feat_3_desc: "Servicio integral desde el despiece en taller computarizado hasta el montaje final en toda la GAM.",

    // Galería
    gallery_title: "Catálogo de Proyectos Realizados",
    gallery_subtitle: "Ejemplos reales de cocinas, muebles aéreos, clósets y áreas integradas.",
    card_1_title: "Cocina Moderna Grafito con Isla",
    card_1_desc: "Muebles inferiores y aéreos en tono carbón mate, complementados con isla y sobre de cuarzo blanco puro.",
    card_2_title: "Cocina Bicolor de Alto Tránsito",
    card_2_desc: "Combinación blanco brillante y grafito, integración de torre de hornos y sobre de granito gris veteado.",
    card_3_title: "Cocina Wengué con Desayunador",
    card_3_desc: "Distribución en L para máxima capacidad de almacenamiento con desayunador en granito claro.",
    card_4_title: "Cocina en Melamina Texturizada",
    card_4_desc: "Tono madera nórdica con salpicadero decorativo hexagonal y nicho aéreo para microondas.",
    card_5_title: "Mueble de Cocina en L Roble",
    card_5_desc: "Optimización lineal de esquinas, encimera de piedra oscura y compartimentos con tiradores cromados.",
    card_6_title: "Ropero Empotrado de Pared a Pared",
    card_6_desc: "Solución modular con maleteros superiores, gaveteros integrados y puertas abatibles de piso a cielo.",
    card_7_title: "Walk-in Closet Modular Blanco",
    card_7_desc: "Cajonería central doble, compartimentos superiores abiertos y rieles reforzados para ropa corta y larga.",
    card_8_title: "Clóset Modular Wengué Abierto",
    card_8_desc: "Estructura independiente para habitación con repisas laterales y gavetas inferiores de cierre suave.",

    // Trayectoria
    caption_taller: "Don Alfredo Araya | Pasión y precisión técnica en taller",
    since_badge: "Desde 1994",
    about_title: "Tres Generaciones de Tradición en Madera",
    about_p1: "El oficio ebanista de la familia inició con José Antonio Araya, artesano dedicado a construir instrumentos de cuerda como violines, contrabajos y guitarras. La exactitud de ese trabajo manual pasó a su hijo y luego a Alfredo Araya Carvajal, quien comenzó en el taller desde los 13 años.",
    about_p2: "En 1994 nace oficialmente Mueblería Araya como un taller enfocado en resolver necesidades de diseño a la medida en los hogares costarricenses. Hoy combinamos esa herencia artesanal con maquinaria de corte computarizado (CNC) para garantizar acabados milimétricos.",
    mision_title: "Misión",
    mision_desc: "Ofrecer soluciones de mobiliario de alta calidad y funcionalidad, adaptadas a las necesidades y gustos de nuestra clientela. Nuestros muebles transforman los espacios de su hogar mediante la combinación de elegancia, durabilidad y accesibilidad.",
    vision_title: "Visión",
    vision_desc: "Ser reconocidos como el referente en mobiliario para el hogar de mayor calidad y accesibilidad. Innovamos en técnicas sostenibles y cuidamos cada acabado para respaldar la confianza y satisfacción total de nuestros clientes.",

    // Cotizador
    calc_title: "Cotizador Interactivo de Muebles",
    calc_subtitle: "Configure las medidas y elementos según su espacio. Los valores se basan en nuestra lista oficial de tarifas en taller.",
    calc_step1: "1. Línea Principal de Mobiliario",
    lbl_elem_principal: "Elemento principal:",
    lbl_longitud: "Longitud requerida:",
    lbl_metros: "metros",
    opt_none: "-- No incluir o solo complementos --",
    opt_remod: "Remodelación de cocina (Desde ₡250,000)",
    opt_abajo: "Mueble abajo con sobre de cuarzo (₡240,000 / m lineal)",
    opt_aereo: "Mueble aéreo de cocina / pilas (₡80,000 / m lineal)",
    opt_closet: "Clósets - hasta 2.40 m alto (₡230,000 / m lineal)",
    opt_walkin: "Walk-in closet - hasta 2.00 m alto (₡180,000 / m lineal)",
    opt_bano: "Mueble de baño con sobre de cuarzo 60 cm (₡140,000)",
    opt_medida: "Mueble especial a medida (Desde ₡150,000)",

    calc_step2: "2. Módulos Adicionales y Complementos",
    chk_aereo: "Mueble aéreo superior cocina/pilas (+₡80,000 / m lineal)",
    chk_torre: "Torre de hornos (+₡190,000 unidad)",
    chk_alacena: "Alacena grande (+₡170,000 unidad)",
    chk_bano: "Mueble de baño c/sobre cuarzo 60 cm (+₡140,000 unidad)",
    chk_vel_sin: "Veladora sin gaveta (+₡30,000 unidad)",
    chk_vel_con: "Veladora con gaveta (+₡40,000 unidad)",
    chk_vanity_4: "Vanity de 4 gavetas (+₡180,000 unidad)",
    chk_vanity_8: "Vanity de 8 gavetas (+₡300,000 unidad)",

    calc_step3: "3. Datos para la Cita de Medición",
    lbl_nombre: "Nombre y Apellido:",
    lbl_ubicacion: "Ubicación / Cantón:",
    lbl_notas: "Notas o requerimientos específicos (opcional):",
    ph_nombre: "Ej: María Rodríguez",
    ph_ubicacion: "Ej: Curridabat, San Pedro, Escazú...",
    ph_notas: "Indique si requiere adaptación para plantilla, lavaplatos o medidas específicas.",
    lbl_total_estimado: "Total Estimado de Referencia:",
    calc_disclaimer: "Precios correspondientes al tarifario de taller. Los montos finales se ajustan con las medidas exactas tomadas en su vivienda sin costo adicional en la GAM.",
    btn_enviar_wa: "Enviar Cotización por WhatsApp (+506 7279 0560)",

    // Footer
    footer_brand_desc: "Ebanistería fina familiar y muebles a la medida para todo Costa Rica.",
    footer_contact_title: "Contacto Rápido",
    footer_location: "Gran Área Metropolitana, Costa Rica",
    footer_social_title: "Canales Oficiales",
    footer_copy: "© 2026 Mueblería Araya | muebleriaarayacr.com. Todos los derechos reservados."
  },
  en: {
    // Navigation
    nav_inicio: "Home",
    nav_proyectos: "Projects",
    nav_historia: "History & Workshop",
    nav_cotizador: "Price Estimator",

    // Hero
    hero_badge: "Fine Cabinetry & CNC Technology",
    hero_title: "Quality you see, elegance you feel",
    hero_desc: "We transform your living spaces with custom modular cabinetry, quartz countertops, and high-durability finishes in Costa Rica.",
    hero_btn_quote: "Get an Estimate",
    hero_btn_gallery: "View Projects",

    // Video
    video_title: "Precision in Every Detail",
    video_desc: "Cabinetry built to rigorous quality standards with a precision fit for your home.",

    // Features
    feat_1_title: "Custom Co-Creation",
    feat_1_desc: "Collaborative design tailored to your layout, lifestyle, and built-in appliances.",
    feat_2_title: "Quartz & Granite Surfaces",
    feat_2_desc: "Premium stone countertops built for daily durability, fitted seamlessly with sinks and cooktops.",
    feat_3_title: "Direct Workshop Installation",
    feat_3_desc: "End-to-end service from automated CNC cutting to precise home installation across the GAM.",

    // Gallery
    gallery_title: "Portfolio of Completed Work",
    gallery_subtitle: "Real projects covering kitchens, overhead cabinets, closets, and integrated spaces.",
    card_1_title: "Modern Charcoal Kitchen with Island",
    card_1_desc: "Upper and lower cabinetry in matte charcoal, centered by an island with pure white quartz.",
    card_2_title: "Contemporary High-Gloss Kitchen",
    card_2_desc: "High-gloss white and graphite contrast with integrated double-oven tower and granite tops.",
    card_3_title: "Dark Wenge Kitchen with Breakfast Bar",
    card_3_desc: "L-shaped design engineered for maximum storage and an exotic light-granite breakfast counter.",
    card_4_title: "Textured Natural Wood Kitchen",
    card_4_desc: "Scandinavian wood-grain melamine paired with a geometric hexagonal backsplash.",
    card_5_title: "Classic Warm Wood Kitchen",
    card_5_desc: "Linear corner layout with dark stone counter, built-in cooktop, and brushed steel handles.",
    card_6_title: "Full Wall-to-Wall Fitted Wardrobe",
    card_6_desc: "Floor-to-ceiling modular wardrobe featuring upper luggage bins and integrated drawer units.",
    card_7_title: "Modular White Walk-in Closet",
    card_7_desc: "Dual center drawers, open shelving compartments, and reinforced hanging rods.",
    card_8_title: "Open Linear Wenge Closet",
    card_8_desc: "Freestanding bedroom organizer with lateral shelving and soft-close bottom drawers.",

    // History
    caption_taller: "Don Alfredo Araya | Passion and precision CNC technology",
    since_badge: "Established 1994",
    about_title: "Three Generations of Woodworking Heritage",
    about_p1: "Our family craftsmanship began with José Antonio Araya, a master artisan who handcrafted violins, double basses, and guitars. That meticulous discipline was passed down to his son and then to Alfredo Araya Carvajal, who began working in the woodshop at age 13.",
    about_p2: "In 1994, Mueblería Araya was officially established to deliver custom cabinetry to homes across Costa Rica. Today, we merge that artisan heritage with computer-controlled (CNC) technology to guarantee exact millimeter tolerances.",
    mision_title: "Mission",
    mision_desc: "To deliver high-quality, functional cabinetry solutions tailored to our clients' unique tastes. Our furniture elevates home spaces through a balance of elegance, durability, and fair pricing.",
    vision_title: "Vision",
    vision_desc: "To be recognized as Costa Rica's trusted benchmark for custom home cabinetry, known for innovation, sustainable practices, and flawless customer satisfaction.",

    // Estimator
    calc_title: "Interactive Cabinetry Estimator",
    calc_subtitle: "Choose your dimensions and modules to calculate an estimate based on our official workshop rates.",
    calc_step1: "1. Primary Cabinetry Selection",
    lbl_elem_principal: "Primary item:",
    lbl_longitud: "Required length:",
    lbl_metros: "meters",
    opt_none: "-- Do not include or accessories only --",
    opt_remod: "Kitchen Renovation (From ₡250,000)",
    opt_abajo: "Base kitchen cabinet with quartz top (₡240,000 / linear m)",
    opt_aereo: "Upper wall cabinet kitchen / laundry (₡80,000 / linear m)",
    opt_closet: "Wardrobes - up to 2.40m height (₡230,000 / linear m)",
    opt_walkin: "Walk-in closet - up to 2.00m height (₡180,000 / linear m)",
    opt_bano: "Bathroom vanity with quartz top 60cm (₡140,000)",
    opt_medida: "Custom special furniture (From ₡150,000)",

    calc_step2: "2. Add-on Modules & Accessories",
    chk_aereo: "Upper wall kitchen/laundry cabinet (+₡80,000 / linear m)",
    chk_torre: "Oven / microwave tower unit (+₡190,000 / unit)",
    chk_alacena: "Large pantry cabinet (+₡170,000 / unit)",
    chk_bano: "Bathroom vanity w/quartz 60cm (+₡140,000 / unit)",
    chk_vel_sin: "Nightstand without drawer (+₡30,000 / unit)",
    chk_vel_con: "Nightstand with drawer (+₡40,000 / unit)",
    chk_vanity_4: "4-Drawer makeup vanity (+₡180,000 / unit)",
    chk_vanity_8: "8-Drawer makeup vanity (+₡300,000 / unit)",

    calc_step3: "3. Contact Info for Home Measurement",
    lbl_nombre: "Full Name:",
    lbl_ubicacion: "Location / Canton:",
    lbl_notas: "Specific requirements or notes (optional):",
    ph_nombre: "E.g.: Sarah Jenkins",
    ph_ubicacion: "E.g.: Curridabat, Escazú, Santa Ana...",
    ph_notas: "Mention details such as cooktop integration, sink cutout, or special dimensions.",
    lbl_total_estimado: "Estimated Budget Reference:",
    calc_disclaimer: "Rates based on direct workshop pricing. Final quotations are confirmed upon complimentary on-site measurement within the GAM.",
    btn_enviar_wa: "Send Quote via WhatsApp (+506 7279 0560)",

    // Footer
    footer_brand_desc: "Family-owned fine cabinetry and custom-made furniture in Costa Rica.",
    footer_contact_title: "Quick Contact",
    footer_location: "Greater Metropolitan Area, Costa Rica",
    footer_social_title: "Official Channels",
    footer_copy: "© 2026 Mueblería Araya | muebleriaarayacr.com. All rights reserved."
  }
};

// Navegación entre vistas SPA
function showView(viewId) {
  const views = document.querySelectorAll('.view-panel');
  views.forEach(v => v.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  const navButtons = document.querySelectorAll('.nav-link');
  navButtons.forEach(btn => btn.classList.remove('active'));

  const matchingBtn = Array.from(navButtons).find(btn => {
    const attr = btn.getAttribute('onclick');
    return attr && attr.includes(`'${viewId}'`);
  });

  if (matchingBtn) {
    matchingBtn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Selector de Idioma
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (btnEs && btnEn) {
    btnEs.classList.toggle('active', lang === 'es');
    btnEn.classList.toggle('active', lang === 'en');
  }

  // Traducción de textos estándar
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Traducción de opciones en selects
  document.querySelectorAll('[data-i18n-opt]').forEach(opt => {
    const key = opt.getAttribute('data-i18n-opt');
    if (translations[lang][key]) {
      opt.textContent = translations[lang][key];
    }
  });

  // Traducción de placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(inp => {
    const key = inp.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      inp.setAttribute('placeholder', translations[lang][key]);
    }
  });

  recalculate();
}

// Cálculo del Cotizador
function recalculate() {
  const baseSelect = document.getElementById('item-base');
  if (!baseSelect) return { total: 0, meters: 1, selectedOption: null };

  const selectedOption = baseSelect.options[baseSelect.selectedIndex];
  const itemType = selectedOption.getAttribute('data-type');
  const itemPrice = parseFloat(selectedOption.getAttribute('data-price')) || 0;

  const rangeInput = document.getElementById('longitud-metros');
  const meters = rangeInput ? (parseFloat(rangeInput.value) || 1) : 1;

  const valLongitud = document.getElementById('val-longitud');
  if (valLongitud) valLongitud.innerText = meters.toFixed(1);

  const lengthContainer = document.getElementById('col-longitud');
  if (lengthContainer) {
    if (itemType === 'linear') {
      lengthContainer.style.opacity = '1';
      lengthContainer.style.pointerEvents = 'auto';
    } else {
      lengthContainer.style.opacity = '0.4';
      lengthContainer.style.pointerEvents = 'none';
    }
  }

  let total = (itemType === 'linear') ? (itemPrice * meters) : itemPrice;

  // Sumar checkboxes adicionales
  const checkboxes = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
  checkboxes.forEach(chk => {
    if (chk.checked) {
      const price = parseFloat(chk.getAttribute('data-price')) || 0;
      const applyLength = chk.getAttribute('data-apply-length') === 'true';
      total += applyLength ? (price * meters) : price;
    }
  });

  const totalDisplay = document.getElementById('total-amount');
  if (totalDisplay) {
    totalDisplay.innerText = '₡' + total.toLocaleString('es-CR');
  }

  return { total, meters, selectedOption };
}

// Envío a WhatsApp
function submitToWhatsApp(e) {
  if (e) e.preventDefault();

  const { total, meters, selectedOption } = recalculate();
  const nombreInput = document.getElementById('cliente-nombre');
  const cantonInput = document.getElementById('cliente-canton');
  const detallesInput = document.getElementById('cliente-detalles');

  const nombre = nombreInput ? nombreInput.value.trim() : '';
  const canton = cantonInput ? cantonInput.value.trim() : '';
  const detalles = detallesInput ? detallesInput.value.trim() : '';

  if (!nombre || !canton) {
    alert(currentLang === 'es' 
      ? 'Por favor complete su nombre y cantón/ubicación.' 
      : 'Please complete your full name and location.');
    return;
  }

  const optKey = selectedOption.getAttribute('data-i18n-opt');
  const baseName = (translations[currentLang] && translations[currentLang][optKey]) 
    ? translations[currentLang][optKey] 
    : selectedOption.text;
  const itemType = selectedOption.getAttribute('data-type');

  let addonsList = [];
  document.querySelectorAll('.checkbox-grid input[type="checkbox"]').forEach(chk => {
    if (chk.checked) {
      const key = chk.getAttribute('data-i18n-key');
      const label = (translations[currentLang] && translations[currentLang][key]) 
        ? translations[currentLang][key] 
        : chk.parentElement.innerText.trim();
      addonsList.push(label);
    }
  });

  let mensaje = '';
  if (currentLang === 'es') {
    mensaje = `*COTIZACIÓN WEB - MUEBLERÍA ARAYA*\n\n` +
      `👤 *Cliente:* ${nombre}\n` +
      `📍 *Ubicación:* ${canton}\n\n` +
      `📋 *Elemento Principal:* ${baseName}\n`;
    if (itemType === 'linear') mensaje += `📏 *Metros Lineales:* ${meters} m\n`;
    if (addonsList.length > 0) {
      mensaje += `\n➕ *Módulos y extras:*\n` + addonsList.map(a => ` • ${a}`).join('\n') + `\n`;
    }
    if (detalles) mensaje += `\n📝 *Notas:* ${detalles}\n`;
    mensaje += `\n💰 *Total Estimado:* ₡${total.toLocaleString('es-CR')}\n\n` +
      `_Consulta generada desde muebleriaarayacr.com_`;
  } else {
    mensaje = `*WEB ESTIMATE - MUEBLERÍA ARAYA*\n\n` +
      `👤 *Client:* ${nombre}\n` +
      `📍 *Location:* ${canton}\n\n` +
      `📋 *Primary Cabinetry:* ${baseName}\n`;
    if (itemType === 'linear') mensaje += `📏 *Linear Meters:* ${meters} m\n`;
    if (addonsList.length > 0) {
      mensaje += `\n➕ *Add-ons & Extras:*\n` + addonsList.map(a => ` • ${a}`).join('\n') + `\n`;
    }
    if (detalles) mensaje += `\n📝 *Notes:* ${detalles}\n`;
    mensaje += `\n💰 *Estimated Total:* ₡${total.toLocaleString('es-CR')}\n\n` +
      `_Inquiry sent from muebleriaarayacr.com_`;
  }

  const phone = '50672790560';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Inicialización de listeners
document.addEventListener('DOMContentLoaded', () => {
  const itemBase = document.getElementById('item-base');
  if (itemBase) itemBase.addEventListener('change', recalculate);

  const rangeInput = document.getElementById('longitud-metros');
  if (rangeInput) rangeInput.addEventListener('input', recalculate);

  document.querySelectorAll('.checkbox-grid input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', recalculate);
  });

  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', submitToWhatsApp);
  }

  recalculate();
});