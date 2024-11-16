mod config;
mod controllers;
mod services;
mod models;
use config::app_config::configure_app;
use actix_web::{App, HttpServer, web, HttpResponse};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Running services");
    HttpServer::new(|| {
        App::new()
            .service(web::scope("/api").configure(configure_app))
            .route(
                "/",
                web::get().to(|| async { HttpResponse::Ok().body("/") }),
            )
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}