#[derive(serde::Serialize, serde::Deserialize)]
pub struct Participant {
    pub id: u32,
    pub name: String,
    pub status: String,
}