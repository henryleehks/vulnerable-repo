def get_user_by_name(db, username):
    # BAD: direct string concatenation
    query = "SELECT * FROM users WHERE username = '" + username + "';"
    return db.execute(query)
