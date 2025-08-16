import { useState } from "react";
import { X } from "lucide-react";

export const Gallery = () =>{ 
  const [selectedImage] = useState<string | null>(null);

  // Replace these with your actual gym photos
  // Place your downloaded Google Maps photos in the public/gym-photos/ folder
  const images = [
    {
      src: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS8xNTY4NTQxNzZfMjc5OTA5NTMxMzU0OTA3M182MjE1MjYwMDc2NjQ0NzI1NTA0X24uanBnP3N0cD1kc3QtanBnX2UxNV90dDYmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SWxOVVQxSlpMbWx0WVdkbFgzVnliR2RsYmk0Mk5EQjRNVEV6Tmk1elpISXVaak0yTXpJNUxtUmxabUYxYkhSZlkyOTJaWEpmWm5KaGJXVXVZeklpZlEmX25jX2h0PXNjb250ZW50LWFybjItMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAxJl9uY19vYz1RNmNaMlFFSldFcnkwbktwZ05FQ3o2Yld0NXVOSzMwWmZZSE5rWHNuS3g3RkRCVWpNUTdnLWhXNWduNC11anBLbjR6ZEVDUGszTktkLXp5anpjRHZpbVlUbFU3ZCZfbmNfb2hjPU4zRE1LTENuLVJZUTdrTnZ3SFRKV0RYJl9uY19naWQ9eDJPNlNMUFFDUWIwQ2VZSGc3U005USZlZG09QU5tUDdHUUJBQUFBJmNjYj03LTUmaWdfY2FjaGVfa2V5PU1qVXlNekl6T0RBd01USXdNemsyTnpBeU1nJTNEJTNELjMtY2NiNy01Jm9oPTAwX0FmVEg0TTNvcWg5ZWtSZWlHdnFockJUTWtaZ1p2ZjVUZzJ0VWlzYjE0VHpSM0Emb2U9Njg4NkU2RTImX25jX3NpZD05ODJjYzciLCJmaWxlbmFtZSI6IlNuYXBJbnN0YS50b18xNTY4NTQxNzZfMjc5OTA5NTMxMzU0OTA3M182MjE1MjYwMDc2NjQ0NzI1NTA0X24uanBnIiwibmJmIjoxNzUzMjkwNTIyLCJleHAiOjE3NTMyOTQxMjIsImlhdCI6MTc1MzI5MDUyMn0.C1t_yk4UCZb9W9U-2AcsZkba3t8K9Jq37NnPLiq_ECA",
      alt: "Enhanced gym photo uploaded by user"
    },
    {
      src: "/angels2/gym-photos/imazh2.jpg", 
      alt: "Weight training area"
    },
    {
      src: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5maGFuMTUtMi5mbmEuZmJjZG4ubmV0L3YvdDM5LjMwODA4LTYvNTIwNTYxMzM0XzE5MjgyNzkwOTc5MDgwNzVfNjIxNjA2NDk4NDg3MTI1MjM0MV9uLmpwZz9zdHA9ZHN0LWpwZ19lMTVfdHQ2Jl9uY19odD1pbnN0YWdyYW0uZmhhbjE1LTIuZm5hLmZiY2RuLm5ldCZfbmNfY2F0PTExMSZfbmNfb2M9UTZjWjJRRmJjMW9YTUR0WXlnVmpvR2hfWVRUOHFtekJ1QThIamcyTU95Mk0xdGM3dm41WllKcm15Y2daRjdMSGczbm14UW8mX25jX29oYz1XSk42cmtqSXZKTVE3a052d0g3T3E1WiZfbmNfZ2lkPTFvMVFaci1LVzdnWmZ1TnhSc1NCb0EmZWRtPUFPUTFjMHdBQUFBQSZjY2I9Ny01Jm9oPTAwX0FmUXQ5YjRMenc2UXJjY1NQd0w1R2RKekw2b3l0dDZ2TU5jWm1qNHZ4Q3d5VHcmb2U9Njg4NkU0RTQmX25jX3NpZD04YjM1NDYiLCJmaWxlbmFtZSI6IlNuYXBJbnN0YS50b181MjA1NjEzMzRfMTkyODI3OTA5NzkwODA3NV82MjE2MDY0OTg0ODcxMjUyMzQxX24uanBnIiwibmJmIjoxNzUzMjg5ODU3LCJleHAiOjE3NTMyOTM0NTcsImlhdCI6MTc1MzI4OTg1N30.bzobGormDsE8W3HKIAbs67WLZFuD2rEU8dPulIFJuWs",
      alt: "Cardio equipment section"
    },
    {
      src: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvMTU3NDQ2NDcxXzQ0NzgyOTAwNjYzMzI1OV84MDg1MjM5OTU0MzAyMjMwNjM5X24uanBnP3N0cD1kc3QtanBnX2UzNV9wNDgweDQ4MF90dDYmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SWxOVVQxSlpMbWx0WVdkbFgzVnliR2RsYmk0eE1EZ3dlREU1TWpBdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtYXJuMi0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMTEmX25jX29jPVE2Y1oyUUVKV0VyeTBuS3BnTkVDejZiV3Q1dU5LMzBaZllITmtYc25LeDdGREJVak1RN2ctaFc1Z240LXVqcEtuNHpkRUNQazNOS2QtenlqemNEdmltWVRsVTdkJl9uY19vaGM9dlhidDBxdnZKa3dRN2tOdndGRkI2czYmX25jX2dpZD14Mk82U0xQUUNRYjBDZVlIZzdTTTlRJmVkbT1BTm1QN0dRQkFBQUEmY2NiPTctNSZpZ19jYWNoZV9rZXk9TWpVeU16SXpPVE16TkRFMk1qRTJNVFV5TnclM0QlM0QuMy1jY2I3LTUmb2g9MDBfQWZTM3JiY1d6NGg5RTVTMDJUM3otV1ZORktjV0xRTExoc1JUdzJjVnF1X0QxdyZvZT02ODg2RTU1NCZfbmNfc2lkPTk4MmNjNyIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzE1NzQ0NjQ3MV80NDc4MjkwMDY2MzMyNTlfODA4NTIzOTk1NDMwMjIzMDYzOV9uLmpwZyIsIm5iZiI6MTc1MzI5MDUyMiwiZXhwIjoxNzUzMjk0MTIyLCJpYXQiOjE3NTMyOTA1MjJ9.QL2MfMq06JaD87BhvDp38VNoUxYjcuf2bAHuTSWEp34",
      alt: "Add your own image description here"
    },
    {
      src: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvMTU4MjQ3MTU0XzI2MTAyMTkyNTQ5NDIxOF83MDQwMDEzNTUxMTc5OTYxMzk1X24uanBnP3N0cD1kc3QtanBnX2UzNV9wNDgweDQ4MF90dDYmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SWxOVVQxSlpMbWx0WVdkbFgzVnliR2RsYmk0eE1EZ3dlREU1TWpBdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtYXJuMi0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDImX25jX29jPVE2Y1oyUUVKV0VyeTBuS3BnTkVDejZiV3Q1dU5LMzBaZllITmtYc25LeDdGREJVak1RN2ctaFc1Z240LXVqcEtuNHpkRUNQazNOS2QtenlqemNEdmltWVRsVTdkJl9uY19vaGM9NGkxQVpQa1pnX1FRN2tOdndHQnMxS1EmX25jX2dpZD14Mk82U0xQUUNRYjBDZVlIZzdTTTlRJmVkbT1BTm1QN0dRQkFBQUEmY2NiPTctNSZpZ19jYWNoZV9rZXk9TWpVeU1qZ3hORFUxTmpZMU16WTBOamt4T1ElM0QlM0QuMy1jY2I3LTUmb2g9MDBfQWZRRjJ0N20zZmtFNE1VdFJlNFVYRU5oWTJOOS1zd2RpWG9XLWdGVlBNYTA4ZyZvZT02ODg2RDc0NCZfbmNfc2lkPTk4MmNjNyIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzE1ODI0NzE1NF8yNjEwMjE5MjU0OTQyMThfNzA0MDAxMzU1MTE3OTk2MTM5NV9uLmpwZyIsIm5iZiI6MTc1MzI5MDUyMiwiZXhwIjoxNzUzMjk0MTIyLCJpYXQiOjE3NTMyOTA1MjJ9.htorrR4yiP3pxQqCkqXgODB0uDUV0J_f7CwAL1QJYy8",
      alt: "Add your own image description here"
    },
    {
      src: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5maGFuMTUtMS5mbmEuZmJjZG4ubmV0L3YvdDUxLjI4ODUtMTUvNTE0MzI2MzY1XzE4MDUyMzMzMTk2Mzc2ODUzXzgzMzUyNTAzMTczOTM5MzU2MThfbi5qcGc_c3RwPWRzdC1qcGdfZTE1X3R0NiZfbmNfaHQ9aW5zdGFncmFtLmZoYW4xNS0xLmZuYS5mYmNkbi5uZXQmX25jX2NhdD0xMDEmX25jX29jPVE2Y1oyUUZiYzFvWE1EdFl5Z1Zqb0doX1lUVDhxbXpCdUE4SGpnMk1PeTJNMXRjN3ZuNVpZSnJteWNnWkY3TEhnM25teFFvJl9uY19vaGM9QmFMWXU4cWhXWndRN2tOdndGWjR1b1omX25jX2dpZD0xbzFRWnItS1c3Z1pmdU54UnNTQm9BJmVkbT1BT1ExYzB3QkFBQUEmY2NiPTctNSZvaD0wMF9BZlNaYU10N0xFZlpIWmxYbXpfUFVILWVGWjB3ZmpMMW1qV2JZelRBWlAzSVFnJm9lPTY4ODZEMzdCJl9uY19zaWQ9OGIzNTQ2IiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNTE0MzI2MzY1XzE4MDUyMzMzMTk2Mzc2ODUzXzgzMzUyNTAzMTczOTM5MzU2MThfbi5qcGciLCJuYmYiOjE3NTMyODk4NTcsImV4cCI6MTc1MzI5MzQ1NywiaWF0IjoxNzUzMjg5ODU3fQ.Qrx9IpDWVYYv5mIngmsBWrjNf06kRXuDxJjmESG0X-U",
      alt: "Add your own image description here"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeria e palestres</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Eksploroni mjediset dhe komunitetin tonë në foto
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 