use actix_web::{web, HttpResponse, Responder};
use crate::services::participant;
// use crate::models::participant::Participant;

pub async fn get_participants() -> impl Responder {
    let participant_list = participant::get_participants();
    HttpResponse::Ok().json(participant_list)
}