# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## Userテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|
|password|integer|null: false, foreign_key: false|

## Groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: false|

## Chatsテーブル
|Column|Type|Options|
|------|----|-------|
|chat|text|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user