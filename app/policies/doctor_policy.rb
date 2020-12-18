class DoctorPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end
  
  def new?
    user.admin
  end

  def create?
    user.admin
  end

  def edit?
    user.admin
  end

  def update?
    user.admin
  end
end
