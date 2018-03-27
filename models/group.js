module.exports = function(db, DB) {
    const Groups = db.define("Groups", {
        group_name: {
            type: DB.STRING,
            allowNull: false
        },
        group_members: {
            type: DB.INTEGER,
            defaultValue: 1
        },
        is_event: {
            type: DB.BOOLEAN,
            defaultValue: false
        },
        event_cost: {
            type: DB.DECIMAL(6,2),
            allowNull: true
        },
        event_spots: {
            type: DB.INTEGER,
            allowNull: true
        },
        route: {
            type: DB.TEXT,
            allowNull: true
        }
    });
    Groups.associate = (models) => {
        Groups.belongsToMany(models.User, {
            through: 'UserGroups',
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Groups;
};