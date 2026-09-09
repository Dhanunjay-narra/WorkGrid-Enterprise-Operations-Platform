export type IotThresholdsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsConfigStateMachine {
  private allowedTransitions: Record<IotThresholdsConfigState, IotThresholdsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsConfigState, to: IotThresholdsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsConfigState, to: IotThresholdsConfigState): IotThresholdsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
