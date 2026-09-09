export type IotThresholdsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsProfileStateMachine {
  private allowedTransitions: Record<IotThresholdsProfileState, IotThresholdsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsProfileState, to: IotThresholdsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsProfileState, to: IotThresholdsProfileState): IotThresholdsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
