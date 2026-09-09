export type IotThresholdsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsThresholdStateMachine {
  private allowedTransitions: Record<IotThresholdsThresholdState, IotThresholdsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsThresholdState, to: IotThresholdsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsThresholdState, to: IotThresholdsThresholdState): IotThresholdsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
