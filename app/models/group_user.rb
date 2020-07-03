class GroupUser < ApplicationRecord
  be_longs :group
  be_longs :user
end
