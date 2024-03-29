#!/usr/bin/python3
""" a script  that is safe from MySQL injections! """
import MySQLdb
import sys

if __name__ == '__main__':
    # Open database connection
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=sys.argv[1],
        passwd=sys.argv[2],
        db=sys.argv[3])
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name = %s", (sys.argv[4],))
    list_states = cur.fetchall()
    for state in list_states:
        print("{}".format(state))
    db.close()
