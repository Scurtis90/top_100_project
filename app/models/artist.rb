class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependent: :destroy
  validates :name, :rank, presence: true
  # validates :name, :rank, uniqueness: true
end
