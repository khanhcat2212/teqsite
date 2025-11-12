const Map = () => {
  return (
    <div className="flex flex-col lg:justify-between gap-10 py-20 lg:py-34 h-[800px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0862647753465!2d106.6634802745752!3d10.804704858672428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752924e0161577%3A0xa11b4689773198ef!2zVMOyYSBOaMOgIFdhc2VjbywgMTAgxJAuIFBo4buVIFF1YW5nLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1762942046281!5m2!1svi!2s"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(100%) brightness(100%) contrast(100%)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
