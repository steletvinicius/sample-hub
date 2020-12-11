class BatchPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end

    def show?
      sender?(user) || receiver?(user)
    end


    def create?
      sender?(user)
    end

    def update?
      receiver?(user)
    end
  end
end
