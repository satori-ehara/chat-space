# README


## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
- has_many :groups
- has_many :chats
- has_many :groups_users
- has_many :groups, through: :groups_users

## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: false|

### Association
- has_many :users
- has_many :chats
- has_many :groups_users
- has_many :users, through: :groups_users

## Chatsテーブル
|Column|Type|Options|
|------|----|-------|
|chat|text|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user