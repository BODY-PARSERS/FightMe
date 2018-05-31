module.exports = function (sequelize, DataTypes) {

    var Debate = sequelize.define("Debate", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        user1_votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        user2_votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    Debate.associate = function (models) {
        Debate.hasMany(models.Message, 
            {foreignKey:{name:'debate_id', allowNull:true}, sourceKey:'id'}
        );
        Debate.belongsToMany(models.User,
        {through: 'UserDebate'}
        );
    };

    return Debate;
};