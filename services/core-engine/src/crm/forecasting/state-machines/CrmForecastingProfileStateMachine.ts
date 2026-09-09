export type CrmForecastingProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingProfileStateMachine {
  private allowedTransitions: Record<CrmForecastingProfileState, CrmForecastingProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingProfileState, to: CrmForecastingProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingProfileState, to: CrmForecastingProfileState): CrmForecastingProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingProfile: " + from + " -> " + to);
    }
    return to;
  }
}
