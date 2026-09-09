export type IotAnomaliesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesProfileStateMachine {
  private allowedTransitions: Record<IotAnomaliesProfileState, IotAnomaliesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesProfileState, to: IotAnomaliesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesProfileState, to: IotAnomaliesProfileState): IotAnomaliesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
