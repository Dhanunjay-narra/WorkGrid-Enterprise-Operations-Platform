export type TenancyProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyProfileStateMachine {
  private allowedTransitions: Record<TenancyProfileState, TenancyProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyProfileState, to: TenancyProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyProfileState, to: TenancyProfileState): TenancyProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyProfile: " + from + " -> " + to);
    }
    return to;
  }
}
