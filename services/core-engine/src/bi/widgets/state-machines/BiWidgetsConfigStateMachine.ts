export type BiWidgetsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsConfigStateMachine {
  private allowedTransitions: Record<BiWidgetsConfigState, BiWidgetsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsConfigState, to: BiWidgetsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsConfigState, to: BiWidgetsConfigState): BiWidgetsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
