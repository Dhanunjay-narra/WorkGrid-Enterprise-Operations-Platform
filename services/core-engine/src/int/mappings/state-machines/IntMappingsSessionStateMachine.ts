export type IntMappingsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsSessionStateMachine {
  private allowedTransitions: Record<IntMappingsSessionState, IntMappingsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsSessionState, to: IntMappingsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsSessionState, to: IntMappingsSessionState): IntMappingsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsSession: " + from + " -> " + to);
    }
    return to;
  }
}
