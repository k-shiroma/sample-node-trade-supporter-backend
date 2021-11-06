# sample-node-trade-supporter-backend
Node.js でのサンプルプロジェクトとして、ゲーム等でよくあるアイテム作成/販売のトレードをサポートするアプリを開発します

## 開発環境
| 名前 | バージョン |
|-|:-:|
| VirtualBox | 6.1 |
| ubuntu | 20.04.3 server |
| Visual Studio Code | 1.61.0 |
| nodenv | 1.4.0+3.631d0b6 |
| Node.js | 17.0.1 |
| express | 4.16.1 |
| express-generator | 4.16.1 |
| Sequelize | 6.9.0 |
| Sequelize CLI | 6.3.0 |
| nodemon | 2.0.14 |

## 実行手順
本プロジェクトを実行する場合、[環境構築](#環境構築) を行った後に下記を実行してください

### 構築/設定
```sh
# 1. ソース取得
git clone https://github.com/k-shiroma/sample-node-trade-supporter-backend.git

# 2. ライブラリ取得
cd sample-node-trade-supporter-backend
npm install

# 3. DBマイグレーション実行
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

### 実行
1. 起動
    ```sh
    ./start.sh
    ```
1. http://localhost:3000 をブラウザで開く

## 開発手順
本プロジェクトの作成手順です

### 環境構築
```sh
# 1. nodenv
## apt アップデート
### install の前にはやっておいたほうがいい
### ubuntu20.04.3 だと build-essential インストール時にエラーになる
sudo apt update

## 開発ツールインストール (nodenv ビルド時に使用)
sudo apt install build-essential

## nodenv ダウンロード
git clone https://github.com/nodenv/nodenv.git ~/.nodenv

## nodenv ビルド
cd ~/.nodenv && src/configure && make -C src

## PATHを通す
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc

## シェル再起動
exec $SHELL -l

## Node.js インストール用プラグイン インストール
git clone https://github.com/nodenv/node-build.git $(nodenv root)/plugins/node-build

## インストール確認
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash

## こうなっていたらOK
## Checking for `nodenv' in PATH: /home/ubuntu/.nodenv/bin/nodenv
## Checking for nodenv shims in PATH: OK
## Checking `nodenv install' support: /home/ubuntu/.nodenv/plugins/node-build/bin/nodenv-install (node-build 4.9.57)
## Counting installed Node versions: none
##   There aren't any Node versions installed under `/home/ubuntu/.nodenv/versions'.
##   You can install Node versions like so: nodenv install 2.2.4
## Auditing installed plugins: OK

# 2. Node.js
## インストール可能なバージョンのリスト確認
nodenv install -l

## インストール(最新)
nodenv install 17.0.1

## システム全体で使用する Node.js 設定
nodenv global 17.0.1

## 確認
node -v
nodenv versions

# 3. MariaDB
## インストール
sudo apt install mariadb-server

## セキュリティ設定
sudo mysql_secure_installation
### Enter current password for root (enter for none):   => 空でEnter
### Set root password? [Y/n]                            => n
### それ以降は y

## 管理ユーザ追加
sudo mariadb
GRANT ALL ON *.* TO 'dbadmin'@'localhost' IDENTIFIED BY 'dbadmin' WITH GRANT OPTION;

## プロジェクト用ユーザ追加
GRANT ALL ON tsdb.* TO dbuser@localhost IDENTIFIED BY 'dbuser' WITH GRANT OPTION;
exit

## 確認
systemctl status mariadb

# 4. express-generator
## インストール
npm install express-generator -g

## リンク更新
nodenv rehash

## 確認
express --version
```

### 設定
```sh
# 5. プロジェクト生成
## プロジェクト生成
cd ~/projects/
express sample-node-trade-supporter-backend --no-view --git
cd ~/projects/sample-node-trade-supporter-backend

# 6. プロジェクト設定
## プロジェクトで使用する Node.js 設定
nodenv local 17.0.1

## Node.js バージョン確認
node -v
nodenv versions

## ライブラリ取得
npm install

## sequelize
### インストール
npm install sequelize

## sequelize/cli
### インストール
### npx install sequelize --save-dev でインストールした場合
### 実行時にかなりもたついて使いづらい
npm install sequelize-cli -g

### 確認
nodenv rehash
sequelize --help

### sequelize プロジェクト設定(各種フォルダ/ファイル追加)
sequelize init

## Nodemon
### インストール
npm install --save-dev nodemon

### 確認
npx nodemon --version
```

### 設定
1. DB接続情報修正  
    config/config.js 編集

    修正前
    ```json
    {
    "development": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    ...
    ```
    修正後
    ```json
    {
    "development": {
        "username": "dbuser",
        "password": "dbuser",
        "database": "tsdb",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    ...
    ```
1. DB作成  
    DB接続確認のついで
    ```sh
    cd ~/projects/sample-node-trade-supporter-backend
    sequelize db:create
    ```

## 開発メモ
### Sequelize
- モデル/マイグレーションファイル追加
    ```sh
    # 例）Userモデル
    sequelize model:generate \
        --name User \
        --attributes username:string,password:string,name:string
    ```
- Seed追加
    ```sh
    # 例）Userモデルのサンプルユーザ追加
    sequelize seed:generate --name sample-users
    ```
- テーブル名/カラム名をスネークケース(aaa_bbb)にしたい  
    モデル作成時に ```--underscored``` 追加
    ```sh
    sequelize model:generate \
    --name User \
    --underscored \
    --attributes username:string,password:string,name:string
    ```
- 論理削除をできるようにしたい  
    - 下記設定
        1. モデル追加後に ```paranoid: true``` 記述  
            例）models/user.js
            ```javascript
            'use strict';
            const {
            Model
            } = require('sequelize');
            module.exports = (sequelize, DataTypes) => {
            class User extends Model {
                static associate(models) {
                }
            };
            User.init({
                username: DataTypes.STRING,
                password: DataTypes.STRING,
                name: DataTypes.STRING
            }, {
                sequelize,
                paranoid: true,     // 論理削除
                modelName: 'User',
            });
            return User;
            };
            ```
        2. マイグレーションファイルに ```deletedAt``` 追加  
            例）migrations/xxx-create-user.js
            ```javascript
            'use strict';
			module.exports = {
			  up: async (queryInterface, Sequelize) => {
			    await queryInterface.createTable('Users', {
			      id: {
			        allowNull: false,
			        autoIncrement: true,
			        primaryKey: true,
			        type: Sequelize.INTEGER
			      },
			      ...
			      updatedAt: {
			        allowNull: false,
			        type: Sequelize.DATE
			      },
                  // 論理削除用
			      deletedAt: {
			        type: Sequelize.DATE
			      }
			    });
			  },
			  ...
			};
            ```
    - テーブル間のマッピング、関連付けしたい  
      | 関連 | 親モデルA | 子モデルB | 外部キーの場所 |
      | :-: | :-- | :-- | :-- |
      | 1:1 | A.hasOne(B) | B.belongsTo(A) | B |
      | 1:N | A.hasMany(B) | B.belongsTo(A) | B |
      | N:M | A.belongsToMany(B) | B.belongsToMany(A) | AB(関連テーブル) |
        - 1:1
            ```js
            // Aモデルの associate メソッド内に記述
            A.hasOne(models.B, {
                foreignKey: 'aId'
            })
            // Bモデルの associate メソッド内に記述
            B.belongsTo(models.A, {
                foreignKey: 'aId'
            })
            ```
        - 1:N
            ```js
            // Aモデルの associate メソッド内に記述
            A.hasMany(models.B, {
                foreignKey: 'aId'
            })
            // Bモデルの associate メソッド内に記述
            B.belongsTo(models.A)
            }
            ```
        - N:M
            ```js
            // Aモデルにカラム追加
            bId: {
              type: DataTypes.INTEGER,
              references: {
                model: B,
                key: 'id'
              }
            },
            // Bモデルにカラム追加
            aId: {
              type: DataTypes.INTEGER,
              references: {
                model: A,
                key: 'id'
              }
            },
            // Aモデルの associate メソッド内に記述
            A.belongsToMany(models.B, {
                through: 'ABs'  // 関連テーブル名
            })
            // Bモデルの associate メソッド内に記述
            B.belongsToMany(models.A, {
                through: 'ABs'
            })
            ```

