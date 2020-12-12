class BatchPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      # sender can only view batch sent from his own institution
      if user.role == "Recepção" || user.admin?
        scope.all
      elsif user.role == "Envio" || user.role == "Cadastro"
        scope.all
      else
        false
      end
    end
  end

  # receiver and admin can view any batch, sender can view only from his own institution
  def show?
    if user.role == "Recepção" || user.admin?
      true
    elsif (user.role == "Envio" || user.role == "Cadastro") && user.institution == record.sender.institution
      true
    else
      false
    end
  end

  # sender and admin can create, but not receiver
  def create?
    user.role == "Envio" || user.role == "Cadastro" || user.admin?
  end

  # receiver and admin can update any batch, sender can update only from his own institution
  def update?
    if user.role == "Recepção" || user.admin?
      true
    elsif (user.role == "Envio" || user.role == "Cadastro") && user.institution == record.sender.institution
      true
    else
      false
    end
  end
end
