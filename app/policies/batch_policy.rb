class BatchPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      # sender can only view batch sent from his own institution (controller handles this)
      scope.all
    end
  end

  # sender and admin can create, but not receiver
  def create?
    user.role == "Envio" || user.role == "Cadastro" || user.admin?
  end

  # sender can update batch from his own institution, receiver can update any batch
  # admin can view but not update (view handles this)
  def update?
    if user.role == "Recepção" || user.admin?
      true
    elsif (user.role == "Envio" || user.role == "Cadastro") && user.institution == record.sender.institution
      true
    else
      false
    end
  end

  # only the sender and admin can destroy the batch
  def destroy?
    record.sender == user || user.admin?
  end
end
