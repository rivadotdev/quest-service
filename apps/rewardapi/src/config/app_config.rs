use actix_web::{web, HttpResponse};
use crate::controllers::{reward, participant};

pub fn configure_app(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/rewards")
            .route(web::get().to(reward::get_rewards))
            .route(web::post().to(reward::post_reward))
            .route(web::head().to(HttpResponse::MethodNotAllowed)),
    );

    cfg.service(
        web::resource("/participant")
            .route(web::get().to(participant::get_participants))
            .route(web::head().to(HttpResponse::MethodNotAllowed)),
    );
}