export type IntHealthCheckPingState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntHealthCheckPingStateMachine {
  private validTransitions: Record<IntHealthCheckPingState, IntHealthCheckPingState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntHealthCheckPingState, next: IntHealthCheckPingState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntHealthCheckPingState, next: IntHealthCheckPingState): IntHealthCheckPingState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntHealthCheckPing: from " + current + " to " + next);
    }
    return next;
  }
}
