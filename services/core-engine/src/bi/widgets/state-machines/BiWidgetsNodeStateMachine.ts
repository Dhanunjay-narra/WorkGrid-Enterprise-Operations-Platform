export type BiWidgetsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsNodeStateMachine {
  private allowedTransitions: Record<BiWidgetsNodeState, BiWidgetsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsNodeState, to: BiWidgetsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsNodeState, to: BiWidgetsNodeState): BiWidgetsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsNode: " + from + " -> " + to);
    }
    return to;
  }
}
