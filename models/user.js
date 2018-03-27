module.exports = (db, DB) => {
    const User = db.define("User", {
        user_name: {
            type: DB.STRING,
            notNull: false,
            validate: {
                len: [1, 50]
                // will have to escape out of coding characters here
            }
        },
        email: {
            type: DB.STRING,
            notNull: false,
            validate: {
                len: [1, 50]
                // will have to escape out of coding characters here
            }
        },
        // There are some more validations through sequelize we can use, not sure how it will work with passport or jwt yet though
        password: {
            type: DB.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [1, 50]
                // ... 
            }
        },
        user_route_one: {
            type: DB.TEXT,
            allowNull: true
        },
        user_route_two: {
            type: DB.TEXT,
            allowNull: true
        },
        user_route_three: {
            type: DB.TEXT,
            allowNull: true
        },
        number_of_Groups: {
            type: DB.INTEGER,
            defaultValue: 0
        }
    });
    User.associate = (models) => {
        User.belongsToMany(models.Groups, {
            through: 'UserGroups',
        });
    };
	return User;
}