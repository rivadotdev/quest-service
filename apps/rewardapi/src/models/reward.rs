#[derive(serde::Serialize, serde::Deserialize)]
pub struct Reward {
    pub id: u32,
    pub rewardid: String,
    pub amount: u32,
    pub rewardtype: String,
}