use crate::models::reward::Reward;

pub fn get_rewards() -> Vec<Reward> {
    let rewards_list = vec![
        Reward {
            id: 1,
            rewardid: "R42".to_string(),
            amount: 100,
            rewardtype: "TypeA".to_string(),
        },
        Reward {
            id: 2,
            rewardid: "R2".to_string(),
            amount: 200,
            rewardtype: "TypeB".to_string(),
        },
    ];

    rewards_list
}