class Billboard < ApplicationRecord
  has_many: artists, dependent: :destroy
  validates :title, :details, presence: true
  validates :title, uniqueness: true
end
