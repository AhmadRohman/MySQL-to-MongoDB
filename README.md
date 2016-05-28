mysql> create table employees(
    -> nip varchar(6) NOT NULL,
    -> name varchar(25) NOT NULL,
    -> gender varchar(15) NOT NULL,
    -> salary int(15) NOT NULL,
    -> primary key(nip));
Query OK, 0 rows affected (0.48 sec)


mysql> select * from employees;
+--------+------+--------+----------+
| nip    | name | gender | salary   |
+--------+------+--------+----------+
| ssdh11 | Oman | Male   | 30000000 |
| ssdh12 | Any  | Female | 11000000 |
| ssdh13 | Ana  | Female | 11000000 |
+--------+------+--------+----------+
3 rows in set (0.03 sec)
