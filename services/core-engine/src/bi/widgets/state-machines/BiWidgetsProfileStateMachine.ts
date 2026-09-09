export type BiWidgetsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsProfileStateMachine {
  private allowedTransitions: Record<BiWidgetsProfileState, BiWidgetsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsProfileState, to: BiWidgetsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsProfileState, to: BiWidgetsProfileState): BiWidgetsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
