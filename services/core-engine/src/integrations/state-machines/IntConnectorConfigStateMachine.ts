export type IntConnectorConfigState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntConnectorConfigStateMachine {
  private validTransitions: Record<IntConnectorConfigState, IntConnectorConfigState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntConnectorConfigState, next: IntConnectorConfigState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntConnectorConfigState, next: IntConnectorConfigState): IntConnectorConfigState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntConnectorConfig: from " + current + " to " + next);
    }
    return next;
  }
}
