# Novatech-Challenge

For React: npm run dev

Pude resolver el codigo agregando el siguiente codigo a la clase Startup:

            services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                    builder => builder.WithOrigins("http://localhost:3000"));
            });
            
            app.UseCors("AllowOrigin");

