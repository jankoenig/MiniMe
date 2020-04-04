// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    /*
        PLATFORMS: Where to deploy the project
        Learn more > jovo.tech/docs/platforms
    */
    alexaSkill: {
        nlu: 'alexa',
    },
    googleAction: {
        nlu: 'dialogflow',
    },

    /*
        STAGING: Setting up different staging environments
        Learn more > jovo.tech/docs/staging
    */
    defaultStage: 'local',
    stages: {
        local: {
            endpoint: '${JOVO_WEBHOOK_URL}',
            alexaSkill: {
                skillId: process.env.LOCAL_SKILL_ID,
                askProfile: process.env.LOCAL_ASK_PROFILE,
            },
        },
        dev: {
            endpoint: process.env.DEV_ENDPOINT,
            alexaSkill: {
                skillId: process.env.DEV_SKILL_ID,
                askProfile: process.env.DEV_ASK_PROFILE,
            },
        },
        prod: {
            endpoint: PROD_ENDPOINT,
            alexaSkill: {
                skillId: process.env.PROD_SKILL_ID,
                askProfile: process.env.PROD_ASK_PROFILE,
            },
        },
    },

    /*
        DEPLOYMENT: Config for the jovo deploy command
        Learn more > jovo.tech/docs/cli/deploy
    */
    deploy: {
        target: [
        'info',
        'model'
        //  'zip'
        ]
    },
};
