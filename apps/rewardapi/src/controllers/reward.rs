use actix_web::{web, HttpResponse, Responder};
use crate::services::reward;
use crate::models::reward::Reward;

pub async fn get_rewards() -> impl Responder {
    let rewards_list = reward::get_rewards();
    HttpResponse::Ok().json(rewards_list)
}

pub async fn post_reward(reward: web::Json<Reward>) -> impl Responder {
    let reward = reward.into_inner(); // Extract the `Reward` from the JSON payload

    // For demonstration, just return the received reward
    HttpResponse::Created().json(reward)
}