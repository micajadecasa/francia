const daysData = {
  day26: {
    id: 'day26',
    title: '📅 DÍA 26 París (Crucero Sena - Torre Eiffel + Perfumes + Louvre)',
    image: 'public/images/day26.png',
    places: [
      {
        id: 'isla-cisnes',
        name: 'Isla de los Cisnes',
        description: 'Isla artificial en el río Sena.',
        images: ['public/images/cisnes.png'],
        audioAdulto: 'public/audio/adulto-cisnes.mp3',
        audioJuvenil: 'public/audio/juvenil-cisnes.mp3'
      },
      {
        id: 'estatua-libertad-paris',
        name: 'Estatua de la Libertad (París)',
        description: 'Réplica de la Estatua de la Libertad en París.',
        images: ['public/images/libertad.png'],
        audioAdulto: 'public/audio/adulto-libertad.mp3',
        audioJuvenil: 'public/audio/juvenil-libertad.mp3'
      },
      {
        id: 'torre-eiffel',
        name: 'Torre Eiffel',
        description: 'El símbolo más icónico de París.',
        images: ['public/images/torre-eiffel.png'],
        audioAdulto: 'public/audio/adulto-torre-eiffel.mp3',
        audioJuvenil: 'public/audio/juvenil-torre-eiffel.mp3'
      },
      {
        id: 'champ-de-mars',
        name: 'Champ de Mars',
        description: 'Gran jardín público a los pies de la Torre Eiffel.',
        images: ['public/images/champ-de-mars.png'],
        audioAdulto: 'public/audio/adulto-champ-de-mars.mp3',
        audioJuvenil: 'public/audio/juvenil-champ-de-mars.mp3'
      },
      {
        id: 'fragonard-opera',
        name: 'Taller de Perfumes Fragonard (Ópera)',
        description: 'Museo y taller de perfumes.',
        images: ['public/images/fragonard-opera.png'],
        audioAdulto: 'public/audio/adulto-fragonard-opera.mp3',
        audioJuvenil: 'public/audio/juvenil-fragonard-opera.mp3'
      },
      {
        id: 'cedric-grolet-opera',
        name: 'Cédric Grolet (Ópera)',
        description: 'Famosa pastelería del chef Cédric Grolet.',
        images: ['public/images/cedric-grolet-opera.png'],
        audioAdulto: 'public/audio/adulto-cedric-grolet-opera.mp3',
        audioJuvenil: 'public/audio/juvenil-cedric-grolet-opera.mp3'
      },
      {
        id: 'louvre-samotracia',
        name: 'Victoria de Samotracia',
        description: 'Escultura helenística situada en la Escalera Daru.',
        images: ['public/images/louvre-samotracia.png'],
        audioAdulto: 'public/audio/adulto-louvre-samotracia.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-samotracia.mp3'
      },
      {
        id: 'louvre-monalisa',
        name: 'La Mona Lisa',
        description: 'El retrato más famoso del mundo, obra de Leonardo da Vinci.',
        images: ['public/images/louvre-monalisa.png'],
        audioAdulto: 'public/audio/adulto-louvre-monalisa.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-monalisa.mp3'
      },
      {
        id: 'louvre-gran-galeria',
        name: 'Gran Galería Italiana',
        description: 'Pasillo monumental con obras de Leonardo, Rafael y Caravaggio.',
        images: ['public/images/louvre-grangal.png'],
        audioAdulto: 'public/audio/adulto-louvre-grangal.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-grangal.mp3'
      },
      {
        id: 'louvre-coronacion-napoleon',
        name: 'La Coronación de Napoleón',
        description: 'Obra monumental de Jacques-Louis David.',
        images: ['public/images/louvre-napoleon.png'],
        audioAdulto: 'public/audio/adulto-louvre-napoleon.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-napoleon.mp3'
      },
      {
        id: 'louvre-libertad-pueblo',
        name: 'La Libertad Guiando al Pueblo',
        description: 'Obra icónica de Eugène Delacroix.',
        images: ['public/images/louvre-libertad.png'],
        audioAdulto: 'public/audio/adulto-louvre-libertad.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-libertad.mp3'
      },
      {
        id: 'louvre-pintura-espanola',
        name: 'Pintura Española',
        description: 'Obras destacadas de Murillo y Zurbarán.',
        images: ['public/images/louvre-espanola.png'],
        audioAdulto: 'public/audio/adulto-louvre-espanola.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-espanola.mp3'
      },
      {
        id: 'louvre-patizambo',
        name: 'El Patizambo',
        description: 'Pintura del pintor español José de Ribera.',
        images: ['public/images/louvre-patizambo.png'],
        audioAdulto: 'public/audio/adulto-louvre-patizambo.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-patizambo.mp3'
      },
      {
        id: 'louvre-venus-milo',
        name: 'Venus de Milo',
        description: 'Escultura griega clásica del siglo II a. C.',
        images: ['public/images/louvre-venus.png'],
        audioAdulto: 'public/audio/adulto-louvre-venus.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-venus.mp3'
      },
      {
        id: 'louvre-egipto',
        name: 'Antigüedades Egipcias',
        description: 'Momias, sarcófagos y escritura jeroglífica.',
        images: ['public/images/louvre-egipto.png'],
        audioAdulto: 'public/audio/adulto-louvre-egipto.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-egipto.mp3'
      },
      {
        id: 'louvre-hammurabi',
        name: 'Código de Hammurabi',
        description: 'La famosa estela con leyes mesopotámicas.',
        images: ['public/images/louvre-hammurabi.png'],
        audioAdulto: 'public/audio/adulto-louvre-hammurabi.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-hammurabi.mp3'
      },
      {
        id: 'louvre-marly-puget',
        name: 'Patios Marly y Puget',
        description: 'Grandes patios con esculturas monumentales.',
        images: ['public/images/louvre-marlypuget.png'],
        audioAdulto: 'public/audio/adulto-louvre-marlypuget.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-marlypuget.mp3'
      },
      {
        id: 'louvre-galeria-apolo',
        name: 'Galería de Apolo',
        description: 'Sala espectacular con las Joyas de la Corona.',
        images: ['public/images/louvre-apolo.png'],
        audioAdulto: 'public/audio/adulto-louvre-apolo.mp3',
        audioJuvenil: 'public/audio/juvenil-louvre-apolo.mp3'
      }
    ]
  },

  day27: {
    id: 'day27',
    title: '📅 DÍA 27 París profundo',
    image: 'public/images/day27.png',
    places: [
      {
        id: 'arco-triunfo',
        name: 'Arco del Triunfo',
        description: 'Monumento en la Place Charles de Gaulle.',
        images: ['public/images/arco-triunfo.png'],
        audioAdulto: 'public/audio/adulto-arco-triunfo.mp3',
        audioJuvenil: 'public/audio/juvenil-arco-triunfo.mp3'
      },
      {
        id: 'champs-elysees',
        name: 'Champs‑Élysées',
        description: 'La avenida más famosa de París.',
        images: ['public/images/champs-elysees.png'],
        audioAdulto: 'public/audio/adulto-champs-elysees.mp3',
        audioJuvenil: 'public/audio/juvenil-champs-elysees.mp3'
      },
      {
        id: 'ange-jacques-gabriel',
        name: 'Ange‑Jacques Gabriel',
        description: 'Detalles arquitectónicos.',
        images: ['public/images/ange-jacques-gabriel.png'],
        audioAdulto: 'public/audio/adulto-ange-jacques-gabriel.mp3',
        audioJuvenil: 'public/audio/juvenil-ange-jacques-gabriel.mp3'
      },
      {
        id: 'plaza-concordia',
        name: 'Plaza de la Concordia',
        description: 'Una de las principales plazas públicas de París.',
        images: ['public/images/plaza-concordia.png'],
        audioAdulto: 'public/audio/adulto-plaza-concordia.mp3',
        audioJuvenil: 'public/audio/juvenil-plaza-concordia.mp3'
      },
      {
        id: 'fuente-rios',
        name: 'Fuente de los Ríos (Fontaine des Fleuves)',
        description: 'Fuente monumental en la Plaza de la Concordia.',
        images: ['public/images/fuente-rios.png'],
        audioAdulto: 'public/audio/adulto-fuente-rios.mp3',
        audioJuvenil: 'public/audio/juvenil-fuente-rios.mp3'
      },
      {
        id: 'obelisco-luxor',
        name: 'Obelisco de Luxor',
        description: 'Antiguo obelisco egipcio.',
        images: ['public/images/obelisco-luxor.png'],
        audioAdulto: 'public/audio/adulto-obelisco-luxor.mp3',
        audioJuvenil: 'public/audio/juvenil-obelisco-luxor.mp3'
      },
      {
        id: 'jardines-tullerias',
        name: 'Jardines de las Tullerías',
        description: 'Parque público situado entre el Louvre y la Plaza de la Concordia.',
        images: ['public/images/jardines-tullerias.png'],
        audioAdulto: 'public/audio/adulto-jardines-tullerias.mp3',
        audioJuvenil: 'public/audio/juvenil-jardines-tullerias.mp3'
      },
      {
        id: 'julio-cesar-anibal',
        name: 'Julio César vs Aníbal Barca',
        description: 'Estatuas históricas.',
        images: ['public/images/julio-cesar-anibal.png'],
        audioAdulto: 'public/audio/adulto-julio-cesar-anibal.mp3',
        audioJuvenil: 'public/audio/juvenil-julio-cesar-anibal.mp3'
      },
      {
        id: 'gran-fuente-redonda',
        name: 'Gran Fuente Redonda (Grand Bassin Rond)',
        description: 'Gran estanque en las Tullerías.',
        images: ['public/images/gran-fuente-redonda.png'],
        audioAdulto: 'public/audio/adulto-gran-fuente-redonda.mp3',
        audioJuvenil: 'public/audio/juvenil-gran-fuente-redonda.mp3'
      },
      {
        id: 'plaza-piramides',
        name: 'Plaza de las Pirámides – Estatua de Juana de Arco',
        description: 'Estatua ecuestre dorada.',
        images: ['public/images/plaza-piramides.png'],
        audioAdulto: 'public/audio/adulto-plaza-piramides.mp3',
        audioJuvenil: 'public/audio/juvenil-plaza-piramides.mp3'
      },
      {
        id: 'arco-carrusel',
        name: 'Arco de Triunfo del Carrusel',
        description: 'Arco monumental cerca del Louvre.',
        images: ['public/images/arco-carrusel.png'],
        audioAdulto: 'public/audio/adulto-arco-carrusel.mp3',
        audioJuvenil: 'public/audio/juvenil-arco-carrusel.mp3'
      },
      {
        id: 'beffroi-saint-germain',
        name: "Beffroi de l'Église Saint‑Germain l'Auxerrois",
        description: 'Campanario histórico.',
        images: ['public/images/beffroi-saint-germain.png'],
        audioAdulto: 'public/audio/adulto-beffroi-saint-germain.mp3',
        audioJuvenil: 'public/audio/juvenil-beffroi-saint-germain.mp3'
      },
      {
        id: 'jacques-de-molay',
        name: 'Jacques de Molay',
        description: 'Último caballero del Temple.',
        images: ['public/images/jacques-de-molay.png'],
        audioAdulto: 'public/audio/adulto-jacques-de-molay.mp3',
        audioJuvenil: 'public/audio/juvenil-jacques-de-molay.mp3'
      },
      {
        id: 'notre-dame',
        name: 'Notre Dame',
        description: 'Catedral católica medieval.',
        images: ['public/images/notre-dame.png'],
        audioAdulto: 'public/audio/adulto-notre-dame.mp3',
        audioJuvenil: 'public/audio/juvenil-notre-dame.mp3'
      },
      {
        id: 'panteon-paris',
        name: 'Panteón de París',
        description: 'Monumento y lugar de enterramiento de ciudadanos ilustres.',
        images: ['public/images/panteon-paris.png'],
        audioAdulto: 'public/audio/adulto-panteon-paris.mp3',
        audioJuvenil: 'public/audio/juvenil-panteon-paris.mp3'
      },
      {
        id: 'jardin-luxemburgo',
        name: 'Jardín de Luxemburgo',
        description: 'Parque y jardines del Senado francés.',
        images: ['public/images/jardin-luxemburgo.png'],
        audioAdulto: 'public/audio/adulto-jardin-luxemburgo.mp3',
        audioJuvenil: 'public/audio/juvenil-jardin-luxemburgo.mp3'
      },
      {
        id: 'le-faune-dansant',
        name: 'Le Faune Dansant',
        description: 'Estatua en el jardín de Luxemburgo.',
        images: ['public/images/le-faune-dansant.png'],
        audioAdulto: 'public/audio/adulto-le-faune-dansant.mp3',
        audioJuvenil: 'public/audio/juvenil-le-faune-dansant.mp3'
      },
      {
        id: 'marchande-masques',
        name: 'La Marchande de Masques',
        description: 'Escultura famosa.',
        images: ['public/images/marchande-masques.png'],
        audioAdulto: 'public/audio/adulto-marchande-masques.mp3',
        audioJuvenil: 'public/audio/juvenil-marchande-masques.mp3'
      },
      {
        id: 'santa-genoveva',
        name: 'Santa Genoveva',
        description: 'Patrona de París.',
        images: ['public/images/santa-genoveva.png'],
        audioAdulto: 'public/audio/adulto-santa-genoveva.mp3',
        audioJuvenil: 'public/audio/juvenil-santa-genoveva.mp3'
      },
      {
        id: 'estatua-libertad-luxemburgo',
        name: 'Estatua de la Libertad',
        description: 'Otra réplica de la estatua.',
        images: ['public/images/estatua-libertad-luxemburgo.png'],
        audioAdulto: 'public/audio/adulto-estatua-libertad-luxemburgo.mp3',
        audioJuvenil: 'public/audio/juvenil-estatua-libertad-luxemburgo.mp3'
      },
      {
        id: 'acteur-grec',
        name: 'L’Acteur Grec',
        description: 'Estatua en los jardines.',
        images: ['public/images/acteur-grec.png'],
        audioAdulto: 'public/audio/adulto-acteur-grec.mp3',
        audioJuvenil: 'public/audio/juvenil-acteur-grec.mp3'
      },
      {
        id: 'bocca-verita',
        name: 'Bocca della Verità',
        description: 'Estatua en los jardines de Luxemburgo.',
        images: ['public/images/bocca-verita.png'],
        audioAdulto: 'public/audio/adulto-bocca-verita.mp3',
        audioJuvenil: 'public/audio/juvenil-bocca-verita.mp3'
      },
      {
        id: 'maria-medici',
        name: 'María de Médici (Reinas de la Allée des Reines)',
        description: 'Estatua de la serie Reinas de Francia.',
        images: ['public/images/maria-medici.png'],
        audioAdulto: 'public/audio/adulto-maria-medici.mp3',
        audioJuvenil: 'public/audio/juvenil-maria-medici.mp3'
      },
      {
        id: 'ana-bretana',
        name: 'Ana de Bretaña (Reinas de la Allée des Reines)',
        description: 'Estatua de la serie Reinas de Francia.',
        images: ['public/images/ana-bretana.png'],
        audioAdulto: 'public/audio/adulto-ana-bretana.mp3',
        audioJuvenil: 'public/audio/juvenil-ana-bretana.mp3'
      },
      {
        id: 'luisa-saboya',
        name: 'Luisa de Saboya (Reinas de la Allée des Reines)',
        description: 'Estatua de la serie Reinas de Francia.',
        images: ['public/images/luisa-saboya.png'],
        audioAdulto: 'public/audio/adulto-luisa-saboya.mp3',
        audioJuvenil: 'public/audio/juvenil-luisa-saboya.mp3'
      }
    ]
  }
};
