export type IotCommandsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsProfileStateMachine {
  private allowedTransitions: Record<IotCommandsProfileState, IotCommandsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsProfileState, to: IotCommandsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsProfileState, to: IotCommandsProfileState): IotCommandsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
