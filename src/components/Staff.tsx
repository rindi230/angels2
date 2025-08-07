export const Staff = () => {
  const trainers = [
    {
      name: "Eurola",
      specialty: "Personal Training & Strength",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81MTUyNzk3NTVfMTgwMTE3Njc2Mjg3NTExMzdfNDk4NTAwNzI3NTQ1NDUwMzY0MF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREU0TURBdWMyUnlMbVk0TWpjNE55NWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtaGVsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDUmX25jX29jPVE2Y1oyUUd5U3ljZEZYM1Z5Ym9aWDU3dFRldk5SWjcxUU9CRS1GajVfNncwR0hqNW9sQXRDMlVqdzkwVHdKZGJDLU1naW1TNElhZ3p6NVRKMWZ1ZEItWnNvTVRtJl9uY19vaGM9ekJNYkpmOXA0cEFRN2tOdndIMGdEV0EmX25jX2dpZD16ellnN1p1OHlmNFdVanJueXhDNVZBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlNkNGlzcGZ6MEs5UFBhT25oYkpDWURjNVBramZIcExSd0FJUDI3eVgzbkRBJm9lPTY4ODZFMDdBJl9uY19zaWQ9ZDg4NWEyIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNTE1Mjc5NzU1XzE4MDExNzY3NjI4NzUxMTM3XzQ5ODUwMDcyNzU0NTQ1MDM2NDBfbi5qcGciLCJuYmYiOjE3NTMyODkyNjQsImV4cCI6MTc1MzI5Mjg2NCwiaWF0IjoxNzUzMjg5MjY0fQ.XIDFRQDjvqvG_ga66t4NvwLP0xLHm2X6lRlO7SuXfnY",
      bio: "Former competitive athlete with expertise in high-intensity workouts and functional fitness."
    },
    {
      name: "Elton",
      specialty: "CrossFit & HIIT",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5maGFuMTUtMi5mbmEuZmJjZG4ubmV0L3YvdDUxLjI4ODUtMTUvNTAzOTAwMjM3XzcwNDAwMzY5ODg5MzEwOF81MTkxNDc5MDkxOTgxMzcxMDg2X24uanBnP3N0cD1kc3QtanBnX2UzNV9wMTA4MHgxMDgwX3NoMC4wOF90dDYmX25jX2h0PWluc3RhZ3JhbS5maGFuMTUtMi5mbmEuZmJjZG4ubmV0Jl9uY19jYXQ9MTAwJl9uY19vYz1RNmNaMlFIbC1MM2FqaUdwSXJNalBBUDN2b0Z1Q3Q2Qmk2MnB4TVpPQzVmazZ6R0NYWVFUUktTMUQ2ZUNNQ0w0UGtPZ1Z4USZfbmNfb2hjPVV1Q1Jld2VvX1lBUTdrTnZ3RTlyTHZyJl9uY19naWQ9eDFZQ1FMbTlyaVVKcURYcVE0ZEt5dyZlZG09QU9RMWMwd0JBQUFBJmNjYj03LTUmb2g9MDBfQWZRVk1TelI4WFdadUZfeGRCQTZyX085NVBCdkVBeUF4UEUxQks5ZEFkQ1dYZyZvZT02ODg2Q0U0RCZfbmNfc2lkPThiMzU0NiIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzUwMzkwMDIzN183MDQwMDM2OTg4OTMxMDhfNTE5MTQ3OTA5MTk4MTM3MTA4Nl9uLmpwZyIsIm5iZiI6MTc1MzI4OTc3NywiZXhwIjoxNzUzMjkzMzc3LCJpYXQiOjE3NTMyODk3Nzd9.k3oaVNQN5LS8U3Uyh_Xbxi96UuNc0evlD9tPj4YNE04",
      bio: "5+ years experience, certified personal trainer specializing in strength training and body transformation."
    },
    {
      name: "Matilda",
      specialty: "Yoga & Pilates",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2luc3RhZ3JhbS5maGFuNS04LmZuYS5mYmNkbi5uZXQvdi90NTEuMjg4NS0xNS81MTczOTY3MzBfMjUwNTYzNTIxOTA2MjIxNzZfMzAwNjE2NDk1NTc2MTcwNjgzOF9uLmpwZz9zdHA9ZHN0LWpwZ19lMTVfdHQ2Jl9uY19odD1pbnN0YWdyYW0uZmhhbjUtOC5mbmEuZmJjZG4ubmV0Jl9uY19jYXQ9MTA4Jl9uY19vYz1RNmNaMlFHSVR4LU5xQmQyc3dPNXhlcEhZMWZQU0VOTUdITlo1LWczSV9VZ085dXZMR09WRjRzMXE5eVZKcC1PYTV5WlRpYyZfbmNfb2hjPVBrbVM5dklMaEkwUTdrTnZ3SEw4em5TJl9uY19naWQ9SDN4YlJuWkgwUlRpZjN6RkJyRHNsZyZlZG09QU9RMWMwd0JBQUFBJmNjYj03LTUmb2g9MDBfQWZSNkxmUHM5d0M3blBJNGdfckpQcXNxX3F3UW9nbHVxQmw5S1p5R0hwVjRaZyZvZT02ODg2RTI1RCZfbmNfc2lkPThiMzU0NiIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzUxNzM5NjczMF8yNTA1NjM1MjE5MDYyMjE3Nl8zMDA2MTY0OTU1NzYxNzA2ODM4X24uanBnIiwibmJmIjoxNzUzMjg5NDg3LCJleHAiOjE3NTMyOTMwODcsImlhdCI6MTc1MzI4OTQ4N30.ZAsYYhss5q1GKDzXJdYY4HJNjLXJoiffPLT5BPemIk0",
      bio: "Certified yoga instructor with 8 years of experience in mindfulness and flexibility training."
    },
    {
      name: "Arber",
      specialty: "Martial Arts & Karate",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuNzE4NzgtMTUvNTAzNzM3Mjg1XzcxMzYyODM3NDk1NDk2Ml82MzMzODg4MTE0NDY4MTM4NTFfbi5qcGc_c3RwPWRzdC1qcGdfZTE1X3R0NiZfbmNfY2F0PTEwMCZpZ19jYWNoZV9rZXk9TXpReE16WXhNelF6T0RjME1UZzJNamswT1ElM0QlM0QuMy1jY2IxLTcmY2NiPTEtNyZfbmNfc2lkPTU4Y2RhZCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbmh3YVdSekxqY3lNSGd4TWpnd0xuTmtjaUo5Jl9uY19vaGM9Q091UDA2VU5xUGtRN2tOdndHSUVoX0smX25jX29jPUFka2hlY2NuQnZzU3hqQmxwWk1ubDlmbTR1VWFQTHVwM0taRTh0TXM1MHNoYTNIQnk2ZEJzTkpGWFhRMUpwbVQ5UVZ4M296Z0dyNEVlbGJISXB5MUs2NDkmX25jX2FkPXotbSZfbmNfY2lkPTAmX25jX3p0PTIzJl9uY19odD1zY29udGVudC1oZWwzLTEuY2RuaW5zdGFncmFtLmNvbSZfbmNfZ2lkPWZJUloyRGh3N2VVQWVSck5OdkFWYkEmb2g9MDBfQWZUOWU5Z2JuNnpNZnRFLWM5NUM3SnlJUnQzM01EWWs4eHhBSG5pQ3VHNi13ZyZvZT02ODg2RTdBQSIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzUwMzczNzI4NV83MTM2MjgzNzQ5NTQ5NjJfNjMzMzg4ODExNDQ2ODEzODUxX24uanBnIiwibmJmIjoxNzUzMjg5NjUxLCJleHAiOjE3NTMyOTMyNTEsImlhdCI6MTc1MzI4OTY1MX0.StpOt8KKz3twTdtOHPrJIJf4H5B9qY6hTFPNl2zByjM",
      bio: "Black belt instructor with 15 years of martial arts experience and competition background."
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Njifni stafin tone ekspert</h2>
          <p className="text-xl text-gray-600">
          Trajnerët tanë të çertifikuar janë këtu për t'ju ndihmuar të arrini qëllimet tuaja të fitnesit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300 animate-fade-in"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{trainer.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
