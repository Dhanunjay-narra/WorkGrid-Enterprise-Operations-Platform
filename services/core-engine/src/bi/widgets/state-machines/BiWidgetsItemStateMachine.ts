export type BiWidgetsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsItemStateMachine {
  private allowedTransitions: Record<BiWidgetsItemState, BiWidgetsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsItemState, to: BiWidgetsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsItemState, to: BiWidgetsItemState): BiWidgetsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsItem: " + from + " -> " + to);
    }
    return to;
  }
}
