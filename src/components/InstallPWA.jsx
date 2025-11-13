import React, { useEffect, useState } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevenir que el navegador muestre su propio prompt
      e.preventDefault();
      // Guardar el evento para usarlo después
      setDeferredPrompt(e);
      // Mostrar el botón de instalación
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Mostrar el prompt de instalación
    deferredPrompt.prompt();

    // Esperar la respuesta del usuario
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("Usuario aceptó instalar la PWA");
    } else {
      console.log("Usuario rechazó instalar la PWA");
    }

    // Limpiar el prompt
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50">
      <div className="bg-yellow-500 text-black rounded-lg shadow-2xl p-4 flex items-center gap-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg">Instalar App</h3>
          <p className="text-sm opacity-90">
            Instala esta app para usarla sin conexión
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleInstallClick}
            className="bg-black text-yellow-500 px-4 py-2 rounded-md font-bold hover:bg-gray-900 transition-colors"
          >
            Instalar
          </button>
          <button
            onClick={() => setShowInstallButton(false)}
            className="text-black hover:text-gray-800 px-2"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
