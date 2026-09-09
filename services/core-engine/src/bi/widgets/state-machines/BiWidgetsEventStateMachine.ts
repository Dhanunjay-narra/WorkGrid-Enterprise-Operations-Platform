export type BiWidgetsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsEventStateMachine {
  private allowedTransitions: Record<BiWidgetsEventState, BiWidgetsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsEventState, to: BiWidgetsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsEventState, to: BiWidgetsEventState): BiWidgetsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
