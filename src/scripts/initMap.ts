declare const google: any;

export function initGoogleMap(): void {
  const center = { lat: -32.832, lng: -70.123 };
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 10,
    center,
  });

  new google.maps.Marker({
    position: center,
    map,
    title: "Paso Los Libertadores",
  });
}

export function loadGoogleMapsScript(apiKey: string): void {
  (window as any).initMap = initGoogleMap;

  const existingScript = document.querySelector("script[data-google-maps]");
  if (existingScript) return;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.setAttribute("data-google-maps", "true");
  document.head.appendChild(script);
}

