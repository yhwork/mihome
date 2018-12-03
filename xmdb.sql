SET NAMES UTF8;
DROP DATABASE IF EXISTS mydb;

CREATE DATABASE mydb CHARSET=UTF8;

USE mydb;

CREATE TABLE product (
    pid int PRIMARY KEY auto_increment,
    img VARCHAR(256),
    color VARCHAR(16),
    title VARCHAR(64),
    price INT,
    num INT
);
INSERT INTO product VALUES
(null,'http://127.0.0.1:8000/img/product/p3.jpg','深空灰','小米8 青春版 全网通版 4GB','1699','1'),
(null,'http://127.0.0.1:8000/img/product/p3.jpg','渐变色','小米8 屏幕指纹版&小米透明探索版 8GB','3599','1'),
(null,'http://127.0.0.1:8000/img/product/product1.jpg','炫黑','黑鲨游戏手机 8GB ','3999','1'),
(null,'http://127.0.0.1:8000/img/product/p3.jpg','流沙金','红米6A 全网通版 4GB','549','1'),
(null,'http://127.0.0.1:8000/img/product/product1.jpg','樱花粉','小米6x 全网通版 6GB ','2999','1'),
(null,'http://127.0.0.1:8000/img/product/p2.jpg','深灰','小米8 SE 全网通版 4GB内存 ','1799','1'),

(null,'http://127.0.0.1:8000/img/product/p3.jpg','流沙金','红米6A 全网通版 4GB','549','1'),
(null,'http://127.0.0.1:8000/img/product/p3.jpg','黑色','小米平板4 8英寸 4GB','1699','1'),
(null,'http://127.0.0.1:8000/img/product/product1.jpg','黑色','小米平板4 8英寸LIT 4GB内存','1499','1'),






CREATE TABLE users(
    uid int PRIMARY KEY auto_increment,
    uname VARCHAR(32) DEFAULT NULL,
    upwd VARCHAR(32),
    email VARCHAR(64) DEFAULT NULL,
    phone VARCHAR(16),
    avatar VARCHAR(128) DEFAULT NULL,
    username VARCHAR(32) DEFAULT NULL,
    gender VARCHAR(2) DEFAULT NULL,
    adress VARCHAR(128) DEFAULT NULL 
);

INSERT INTO users VALUES(null,'yy','123456','878507710@qq.com','17634630220',null,null,1,'上海市 虹桥区');


##增加字段
ALTER TABLE product ADD selects Boolean NOT Null



##同一个表可以同时设置多个字段的默认值，用逗号（,）隔开即可
##alter table  users `name` VARCHAR (255) DEFAULT null,users `type` INT (11) DEFAULT 0,users `company_id` INT (11) DEFAULT 0,
##modify `region_id` INT (11) DEFAULT 0,modify `farm_id` INT (11) DEFAULT 0;