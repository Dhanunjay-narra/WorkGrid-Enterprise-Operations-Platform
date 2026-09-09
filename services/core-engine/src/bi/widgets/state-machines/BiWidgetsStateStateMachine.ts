export type BiWidgetsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsStateStateMachine {
  private allowedTransitions: Record<BiWidgetsStateState, BiWidgetsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsStateState, to: BiWidgetsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsStateState, to: BiWidgetsStateState): BiWidgetsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsState: " + from + " -> " + to);
    }
    return to;
  }
}
