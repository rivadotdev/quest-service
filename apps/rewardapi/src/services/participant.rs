use crate::models::participant::Participant;

pub fn get_participants() -> Vec<Participant> {
    let particpant_list = vec![
        Participant {
            id: 1,
            name: "ysp".to_string(),
            status: "completed".to_string()
        }
    ];

    particpant_list
}