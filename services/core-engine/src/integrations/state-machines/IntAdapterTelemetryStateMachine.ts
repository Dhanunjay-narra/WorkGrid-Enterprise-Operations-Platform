export type IntAdapterTelemetryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntAdapterTelemetryStateMachine {
  private validTransitions: Record<IntAdapterTelemetryState, IntAdapterTelemetryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntAdapterTelemetryState, next: IntAdapterTelemetryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntAdapterTelemetryState, next: IntAdapterTelemetryState): IntAdapterTelemetryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntAdapterTelemetry: from " + current + " to " + next);
    }
    return next;
  }
}
