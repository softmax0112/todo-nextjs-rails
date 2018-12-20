class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 6..20 }
  has_many :tasks

  def token
    JWT.encode({ "id" => id }, Rails.application.secret_key_base )
  end

  def self.find_by_token(token)
    User.find(
      JWT.decode(token, Rails.application.secret_key_base)[0]["id"]
    )
  rescue
    nil
  end
end
